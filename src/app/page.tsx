import Link from 'next/link'
import React from 'react'
import { BiHomeCircle, BiUser } from 'react-icons/bi'
import {
  BsBell,
  BsBookmark,
  BsTwitter,
  BsEnvelope,
  BsThreeDots
} from 'react-icons/bs'
import { HiOutlineHashtag } from 'react-icons/hi'

const NAVIGATION_ITEMS = [
  {
    title: 'Twitter',
    icon: BsTwitter
  },
  {
    title: 'Home',
    icon: BiHomeCircle
  },
  {
    title: 'Explore',
    icon: HiOutlineHashtag
  },
  {
    title: 'Notifications',
    icon: BsBell
  },
  {
    title: 'Messages',
    icon: BsEnvelope
  },
  {
    title: 'Bookmark',
    icon: BsBookmark
  },
  {
    title: 'Profile',
    icon: BiUser
  }
]

const Home = () => {
  return (
    <div className="w-full h-full  flex justify-center items-center">
      <div className="max-w-screen-lg w-full h-full flex relative">
        <section className="fixed w-[275px] flex flex-col h-screen items-stretch">
          <div className="flex flex-col items-stretch space-y-4 h-full mt-4">
            {NAVIGATION_ITEMS.map(item => (
              <Link
                className="hover:bg-white/10 transition duration-200 rounded-2xl py-2 px-6 flex items-center justify-start w-fit text-2xl space-x-4"
                href={`/${item.title.toLowerCase()}`}
                key={item.title}
              >
                <div>
                  <item.icon />
                </div>
                {item.title.toLowerCase() !== 'twitter' && (
                  <div>{item.title}</div>
                )}
              </Link>
            ))}
            <button className="w-full rounded-full m-4 bg-primary px-6 py-4 text-2l text-center hover:bg-opacity-70 transition duration-200">
              Tweet
            </button>
          </div>
          <button className="w-full flex items-center justify-end rounded-full m-4 space-x-2 bg-transparent px-6 py-4 text-2l text-center hover:bg-opacity-70 transition duration-200">
            <div className="w-full flex space-x-2">
              <div className="rounded-full bg-slate-400 w-8 h-8 "></div>
              <div className="text-left text-xs mr-auto">
                <div className="font-semibold">Club of Coders</div>
                <div className="">@clubofcoderscom</div>
              </div>
            </div>
            <div>
              <BsThreeDots />
            </div>
          </button>
        </section>
        <main>Home Timeline</main>
        <section>right section</section>
      </div>
    </div>
  )
}

export default Home

