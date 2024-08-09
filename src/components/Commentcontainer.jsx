import React from "react";
import { VscAccount } from "react-icons/vsc";

const Commentcontainer = () => {
  const youtubeComments = [
    {
      id: 1,
      author: "AliceWonder",
      comment:
        "This tutorial was super helpful! Thanks for breaking it down step by step.",
      timestamp: "3 hours ago",
      upvotes: 230,
      replies: [
        {
          id: 2,
          author: "BobBuilder",
          comment: "Agreed! I finally understood how to implement it.",
          timestamp: "2 hours ago",
          upvotes: 150,
          replies: [
            {
              id: 3,
              author: "CodeMaster",
              comment:
                "Glad it helped you both! More tutorials are on the way.",
              timestamp: "1 hour ago",
              upvotes: 120,
              replies: [],
            },
          ],
        },
        {
          id: 4,
          author: "CharlieC",
          comment: "I got stuck at the 5-minute mark, can anyone help?",
          timestamp: "2 hours ago",
          upvotes: 80,
          replies: [
            {
              id: 5,
              author: "DevDaisy",
              comment: "What part are you stuck on? Maybe I can help.",
              timestamp: "1 hour ago",
              upvotes: 65,
              replies: [
                {
                  id: 6,
                  author: "CharlieC",
                  comment:
                    "I’m confused about the API call. Is there a specific library I need?",
                  timestamp: "45 minutes ago",
                  upvotes: 30,
                  replies: [
                    {
                      id: 7,
                      author: "DevDaisy",
                      comment:
                        "Yes, you'll need Axios for that. Make sure it's installed.",
                      timestamp: "30 minutes ago",
                      upvotes: 40,
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 8,
      author: "EagleEye",
      comment:
        "The sound quality in this video is top-notch. What mic are you using?",
      timestamp: "4 hours ago",
      upvotes: 180,
      replies: [
        {
          id: 9,
          author: "FionaF",
          comment:
            "I think they're using the Blue Yeti mic, it's really popular among YouTubers.",
          timestamp: "3 hours ago",
          upvotes: 120,
          replies: [],
        },
        {
          id: 10,
          author: "GamerGuy",
          comment: "I second that! The Blue Yeti is a solid choice.",
          timestamp: "2 hours ago",
          upvotes: 95,
          replies: [],
        },
      ],
    },
    {
      id: 11,
      author: "HackerHarry",
      comment: "This video needs more views, it's too good to be missed!",
      timestamp: "5 hours ago",
      upvotes: 210,
      replies: [
        {
          id: 12,
          author: "InfluencerIvy",
          comment:
            "I just shared it on my social media, hope it gets the attention it deserves!",
          timestamp: "4 hours ago",
          upvotes: 160,
          replies: [
            {
              id: 13,
              author: "JesterJoe",
              comment: "Same here! Shared it with my coding group.",
              timestamp: "3 hours ago",
              upvotes: 110,
              replies: [],
            },
          ],
        },
      ],
    },
    {
      id: 14,
      author: "KeenKara",
      comment: "Can anyone recommend similar channels? I’m new to this topic.",
      timestamp: "6 hours ago",
      upvotes: 150,
      replies: [
        {
          id: 15,
          author: "LivelyLeo",
          comment:
            "Check out 'TechSavy' and 'CodeCrush'. They have great content.",
          timestamp: "5 hours ago",
          upvotes: 130,
          replies: [],
        },
      ],
    },
    {
      id: 16,
      author: "MaverickMike",
      comment:
        "The visuals in this video are stunning, what editing software did you use?",
      timestamp: "7 hours ago",
      upvotes: 190,
      replies: [
        {
          id: 17,
          author: "NinjaNate",
          comment:
            "Probably Adobe Premiere Pro, it’s the go-to for most creators.",
          timestamp: "6 hours ago",
          upvotes: 140,
          replies: [],
        },
      ],
    },
    {
      id: 18,
      author: "OceanOscar",
      comment:
        "Does anyone else feel like this should have more views? It’s so underrated!",
      timestamp: "8 hours ago",
      upvotes: 170,
      replies: [
        {
          id: 19,
          author: "PixelPete",
          comment: "Absolutely! I’m sharing it with everyone I know.",
          timestamp: "7 hours ago",
          upvotes: 130,
          replies: [],
        },
      ],
    },
    {
      id: 20,
      author: "QuietQueen",
      comment: "This video was so calming to watch, great work!",
      timestamp: "9 hours ago",
      upvotes: 200,
      replies: [
        {
          id: 21,
          author: "RogueRiley",
          comment: "It’s the background music for me, so soothing!",
          timestamp: "8 hours ago",
          upvotes: 150,
          replies: [],
        },
      ],
    },
  ];

  const Comment = ({ data }) => {
    const { author, comment } = data;
    return (
      <div className="flex gap-3 items-center justify-start ">
        <div>
          <VscAccount className="text-2xl font-bold" />
        </div>
        <div>
          <div className="font-bold">{author}</div>
          <div>{comment}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="py-5 px-2">
      <div>
        <h1 className="font-bold text-lg">Comments:</h1>
        <Comment data={youtubeComments[0]} />
      </div>
    </div>
  );
};

export default Commentcontainer;
