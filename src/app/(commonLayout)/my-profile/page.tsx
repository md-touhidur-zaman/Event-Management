import ProfileForm from "@/components/modules/profile/ProfileForm";

export default function MyProfilePage() {
  return (
    <div className="container mx-auto mt-5">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold ">Profile Setting</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences.</p>
      </div>

      <div className="flex justify-center items-center">
        <ProfileForm/>
      </div>
    </div>
  );
}
