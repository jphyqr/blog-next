import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const videos = [
  { id: "asdfasdf", url: "video1", parentId: "sdfasdf", title: "Title 1" },
  { id: "asdfasdf", url: "video2", parentId: "vsadfaa", title: "Title2" }
];

const Carousel = ({ course }) => {
  const router = useRouter();
  //we need to get the videos just for this course

  let filteredVideos = videos.filter(v => v.parentId == course.id);

  const renderVideos = videos => {
    return videos.map(video => {
      return (
        <div className='container' key={video.id}>
          <Link
            href={"/[course]/[video]"}
            as={`/${course.title.replace(" ", "")}/${video.title.replace(
              " ",
              ""
            )}`}
          >
            <a>
              <h3>{video.title || "no Title"}</h3>
            </a>
          </Link>

          <video src={`${video.url}.mp4`} />
        </div>
      );
    });
  };

  return (
    <div>
      <h2>{course.title}</h2>
      <button
        onClick={() => router.push("/[courseId]/edit", `/${course.id}/edit`)}
      >
        Edit
      </button>
      {renderVideos(filteredVideos)}
    </div>
  );
};

export default Carousel;
