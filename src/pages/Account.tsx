import profile from "../assets/photo.png";
import cameraIcon from "../assets/camera.svg";
import { useUser } from "../context/userContext";

const UserProfile: React.FC = () => {
  const { user } = useUser();

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-93.75 h-203 bg-[#F7F8F9]  flex flex-col overflow-y-auto shadow-lg rounded-xl">
        <div className="bg-white h-17 px-3.75 ">
          <h1 className=" w-36.5 h-5.5] text-[18px] pb-4.75  relative top-6.75">
            Account Settings
          </h1>
        </div>
        <div className="px-5">
          <div className="flex gap-5 py-5 ">
            <div className="relative">
              <div>
                <img
                  src={profile}
                  alt="profile-photo"
                  className="w-19 h-19 rounded-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0  p-1 rounded-full ">
                <img src={cameraIcon} alt="icon" className="w-5.25 h-5.75" />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              {/* @ts- */}
              <h1 className=" h-4.5 text-[15px] font-medium">
                {user?.fullname}
              </h1>
              <p className=" h-4 text-[14px] text-gray-500">{user?.email}</p>
            </div>
          </div>

          <p className="w-full h-15.75 text-[14px] text-[#1D2226] pb-5">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>

          <div className="border border-dashed border-[#CBCBCB] my-3"></div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
