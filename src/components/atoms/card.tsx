"use client";
import { raleway } from "@/app/fonts";
import {
  faCartShopping,
  faHandshake,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";

export default function Card({ ...album }) {
  const { artist, user, src } = album;
  const [showIcons, setShowIcons] = useState(false);

  return (
    <>
      <div
        className="relative w-full flex justify-center"
        onMouseEnter={() => setShowIcons(true)}
        onMouseLeave={() => setShowIcons(false)}
      >
        <div className=" bg-background-300 rounded-2xl block overflow-hidden">
          <Image
            src={src}
            alt={artist}
            width={242}
            height={193}
            priority={false}
            className="pb-4"
            style={{ opacity: "90%" }}
          />
          <div className="mx-5 mb-9">
            <h4 className={`${raleway.className} text-xl text-white mb-1`}>
              {artist}
            </h4>
            <div className="flex gap-1">
              <Image
                src={user.src}
                alt={user.name}
                width={16}
                height={16}
                style={{ objectFit: "contain" }}
              />
              <p className="text-white text-xs text-opacity-65">{user.name}</p>
            </div>
          </div>
        </div>
        <div
          className={`absolute w-11/12 flex justify-between bg-background-100 rounded-2xl overflow-hidden px-4 py-3 transition-opacity z-1 ${
            showIcons ? "opacity-100" : "opacity-0"
          }`}
          style={{ top: "95%" }}
        >
          <FontAwesomeIcon icon={faHandshake} className="text-gray-400 w-5" />
          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-gray-400 w-5"
          />
          <FontAwesomeIcon icon={faHeart} className="text-gray-400 w-5" />
        </div>
      </div>
    </>
  );
}
