import { NextApiRequest } from "next";

import { NextApiResponseServerIO } from "@/types/next";
import { Socket } from "socket.io";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponseServerIO,
) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

  try {
    console.log("handler")
    res?.socket?.server?.io?.emit("onCallback", "test")
    return res.status(200).json({message: "test"});
  } catch (error) {
    console.log("[DIRECT_MESSAGES_POST]", error);
    return res.status(500).json({ message: "Internal Error" }); 
  }
}