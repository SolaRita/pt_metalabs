"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHandshake,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

export default function Card({ ...album }) {
  let { id, artist, user, src, like } = album;
  const [showIcons, setShowIcons] = useState(false);
  const [liked, setLiked] = useState(like);

  const toggleLike = () => {
    const newLikedState = !liked;
    setLiked(newLikedState);
    const updatedAlbum = { ...album, like: newLikedState };
    /* Lógica para enviar el album con el nuevo estado */
  };

  return (
    <>
      <div
        className="relative w-full flex justify-center"
        onMouseEnter={() => setShowIcons(true)}
        onMouseLeave={() => setShowIcons(false)}
      >
        <div className="bg-background-300 rounded-2xl block overflow-hidden">
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
            <h4 className="text-xl text-white mb-1">{artist}</h4>
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
          <Link
            href="#"
            onClick={() => {
              /* Lógica para el enlace del acuerdo */
            }}
          >
            <FontAwesomeIcon icon={faHandshake} className="text-grey w-5" />
          </Link>
          <Link
            href="#"
            onClick={() => {
              /* Lógica para el enlace del carrito */
            }}
          >
            <FontAwesomeIcon icon={faCartShopping} className="text-grey w-5" />
          </Link>
          <FontAwesomeIcon
            icon={faHeart}
            className={` w-5 cursor-pointer ${
              liked ? "text-accent" : "text-grey"
            }`}
            onClick={toggleLike}
            style={{
              fill: liked ? "text-grey" : "none",
              stroke: "text-grey",
              strokeWidth: "2",
            }}
          />
        </div>
      </div>
    </>
  );
}
