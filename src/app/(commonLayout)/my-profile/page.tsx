import ProfileForm from "@/components/modules/profile/ProfileForm";
import { getLoginUserInfo } from "@/services/auth/auth.services";

export default async function MyProfilePage() {
  const {data} = await getLoginUserInfo()
  return (
    <div className="container mx-auto mt-5 p-2 md:p-0">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold ">Profile Setting</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences.</p>
      </div>
      <div className="flex justify-center items-center">
        <ProfileForm userInfo={data}/>
      </div>
    </div>
  );
}
