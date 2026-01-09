"use client";

import { CircleAlertIcon } from "lucide-react";
import { useId, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IEvent } from "@/types/host.interface";
import { deleteEvent } from "@/services/host/hostManagement";
import { toast } from "sonner";
import { IAdminEvent } from "@/types/admin.interface";

interface IDeleteModalProps {
  setOpenDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  openDeleteModal: boolean;
  event: IEvent | IAdminEvent;
}

export default function DeleteModal({
  openDeleteModal,
  setOpenDeleteModal,
  event,
}: IDeleteModalProps) {
  const PROJECT_NAME = event?.title;

  const id = useId();
  const [inputValue, setInputValue] = useState("");

  const handelDelete = async () => {
    const result = await deleteEvent(event?._id);
    if (result?.success === true) {
      toast.success(result.message);
      setInputValue("");
      setOpenDeleteModal(false);
    }else if(result?.success === false){
        toast.error(result.message)
    }
  };

  const handelCancel = async () => {
    setInputValue("");
    setOpenDeleteModal(false);
  };

  return (
    <Dialog open={openDeleteModal}>
      <DialogContent>
        <div className="flex flex-col items-center gap-2">
          <div
            aria-hidden="true"
            className="flex size-9 shrink-0 items-center justify-center rounded-full border border-red-500"
          >
            <CircleAlertIcon className="opacity-80 text-red-500" size={16} />
          </div>
          <DialogHeader>
            <DialogTitle className="sm:text-center text-[#DC143C]">
              Final confirmation
            </DialogTitle>
            <DialogDescription className="sm:text-center">
              This action cannot be undone. To confirm, please enter the event
              title <span className="text-foreground">{event?.title}</span>.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form className="space-y-5">
          <div className="*:not-first:mt-2">
            <Label htmlFor={id}>Event Title</Label>
            <Input
              id={id}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type coss-ui to confirm"
              type="text"
              value={inputValue}
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                onClick={handelCancel}
                className="flex-1"
                type="button"
                variant="outline"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              className="flex-1 bg-[#DC143C] text-white"
              disabled={inputValue !== PROJECT_NAME}
              type="button"
              variant={"outline"}
              onClick={handelDelete}
            >
              Delete
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
