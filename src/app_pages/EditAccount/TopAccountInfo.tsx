import React, { ChangeEvent } from "react";
import { BadgeCheck, Dribbble, Facebook, Github, Globe, ImagePlus, Instagram, Linkedin, Mail, MapPin, MoreHorizontal, UserCircle, PenIcon, Edit} from "lucide-react";
import { Dropdown } from "Common/Components/Dropdown";

// IMage
import avatar1 from "assets/images/users/avatar-1.png";

const TopAccountInfo = ({ className }: any) => {

    const [selectedImage, setSelectedImage] = React.useState<string | ArrayBuffer | null>(avatar1);

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {

        const file = event.target.files?.[0];

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    return (
        <React.Fragment>
            <div className={className}>
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 2xl:grid-cols-12">
                    <div className="lg:col-span-2 2xl:col-span-1">
                        <div className="relative inline-block size-20 rounded-full shadow-md bg-slate-100 profile-user xl:size-28">
                            <img src={selectedImage?.toString() ?? avatar1} alt="" className="object-cover border-0 rounded-full img-thumbnail user-profile-image" />
                            <div className="absolute bottom-0 flex items-center justify-center size-8 rounded-full ltr:right-0 rtl:left-0 profile-photo-edit">
                                <input id="profile-img-file-input" type="file"
                                    className="hidden profile-img-file-input"
                                    onChange={handleImageChange} />
                                <label htmlFor="profile-img-file-input" className="flex items-center justify-center size-8 bg-white rounded-full shadow-lg cursor-pointer dark:bg-zink-600 profile-photo-edit">
                                    <ImagePlus className="size-4 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-500"></ImagePlus>
                                </label>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

        </React.Fragment>
    );
}

export default TopAccountInfo;