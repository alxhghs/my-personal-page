import React from "react";
import Image from "next/image";
import profilePic from "../public/me.png";

type ProfileImageProps = {
    height: string;
    width: string;
};

export function ProfileImage({ height, width }: ProfileImageProps) {
    return (
        <>
            <div className="wrapper">
                <Image
                    src={profilePic}
                    placeholder="blur"
                    height={height}
                    width={width}
                />
            </div>
            <style jsx>{`
                .wrapper {
                    border-radius: 50%;
                    overflow: hidden;
                    justify-self: center;
                }
            `}</style>
        </>
    );
}
