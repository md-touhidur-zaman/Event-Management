"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { serverFetch } from "@/lib/server-fetch";
import { IParams } from "@/types/host.interface";
import { revalidateTag } from "next/cache";
import z from "zod";

const createEventZodSchema = z.object({
    title: z.string().min(10, "The title will be 10 character long"),
    category: z
      .string()
      .min(
        1,
        "You need to select a category",
      ),
    organizer_name: z.string().min(1, "You need to provide organizer name"),
    time: z.string().min(3, "You need to provide time"),
    location: z.string().min(3, "You need to provide proper location"),
    total_participants: z.number().min(50, "Minimum Participants will be 50"),
    description: z.string().min(1,"You need to provide description with 200 character long"),
    joining_fee: z.number(),
});

export const createEvent = async (
  _currentState: any,
  formData: any,
): Promise<any> => {
  try {
    const data = {
      title: formData.get("title"),
      category: formData.get("category"),
      organizer_name: formData.get("organizer_name"),
      date: formData.get("event_date"),
      time: formData.get("time"),
      location: formData.get("location"),
      total_participants: Number(formData.get("total_capacity")),
      description: formData.get("description"),
      joining_fee: Number(formData.get("price")),
    };

    const file = formData.get("image");

    const newEventFormData = new FormData();
    newEventFormData.append("data", JSON.stringify(data));
    newEventFormData.append("file", file as Blob);

    const verifiedEventFormData = createEventZodSchema.safeParse(data)

    if (!verifiedEventFormData.success) {
      return {
        success: false,
        errors: verifiedEventFormData.error.issues.map((issue) => {
          return {
            field: issue.path[0],
            message: issue.message,
          };
        }),
      };
    }

    const res = await serverFetch
      .post("/event/create-event", {
        body: newEventFormData,
      })
      .then((res) => res.json());
    return res;
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      message: error?.message,
    };
  }
};

export const getPublishedEvents = async (params: IParams): Promise<any> => {
  try {
    const res = await serverFetch
      .get(
        `/host/published-event?searchTerm=${params.searchTerm}&&status=${params.status}&&sortBy=${params.sortBy}&&page=${params.page}`,
        {
          next: {
            tags: ["HostEvents"],
          },
        },
      )
      .then((res) => res.json());
    return res;
  } catch (error: any) {
    return error?.message;
  }
};

export const updateEvent = async (
  _currentState: any,
  formData: FormData,
): Promise<any> => {
  try {
    const data = {
      _id: formData.get("_id"),
      title: formData.get("title"),
      category: formData.get("category"),
      organizer_name: formData.get("organizer_name"),
      date: formData.get("event_date"),
      time: formData.get("time"),
      location: formData.get("location"),
      total_participants: Number(formData.get("total_capacity")),
      description: formData.get("description"),
      joining_fee: Number(formData.get("price")),
      event_status: formData.get("status"),
    };

    const file = formData.get("image");

    const newUpdatedFormData = new FormData();
    newUpdatedFormData.append("data", JSON.stringify(data));

    if (file) {
      newUpdatedFormData.append("file", file as Blob);
    }

    const res = await serverFetch
      .patch(`/event/update/${data._id}`, {
        body: newUpdatedFormData,
      })
      .then((res) => res.json());
    return res;
  } catch (error: any) {
    return {
      success: false,
      message: error?.message,
    };
  }
};

export const deleteEvent = async (eventId: string) => {
  try {
    const res = await serverFetch
      .delete(`/event/delete/${eventId}`)
      .then((res) => res.json());

    if (res.success === true) {
      revalidateTag("HostEvents", { expire: 0 });
    }

    return res;
  } catch (error: any) {
    return {
      success: false,
      message: error?.message,
    };
  }
};

export const participantsInfo = async (eventId: string) => {
  try {
    const res = await serverFetch
      .get(`/booking/participants/${eventId}`)
      .then((res) => res.json());
    return res;
  } catch (error: any) {
    return {
      success: false,
      message: error?.message,
    };
  }
};

export const becomeAHost = async () => {
  try {
    const res = await serverFetch
      .post("/host/become-host")
      .then((res) => res.json());
    return res;
  } catch (error: any) {
    return {
      success: false,
      message: error?.message,
    };
  }
};

export const becomeAHostInfo = async () => {
  try {
    const res = await serverFetch
      .get("/host/requested-host", {
        next: {
          tags: ["BecomeHost"],
        },
      })
      .then((res) => res.json());
    return res;
  } catch (error: any) {
    return {
      success: false,
      message: error?.message,
    };
  }
};

export const handelHostApprovalStatus = async ({
  hostId,
  approval_Status,
}: {
  hostId: string;
  approval_Status: string;
}) => {
  try {
    const payload = {
      approval_Status: approval_Status,
    };
    const res = await serverFetch
      .patch(`/host/update-approval/${hostId}`, {
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(payload),
      })
      .then((res) => res.json());

    if (res?.success === true) {
      revalidateTag("BecomeHost", { expire: 0 });
    }
  } catch (error: any) {
    return {
      success: false,
      message: error?.message,
    };
  }
};
