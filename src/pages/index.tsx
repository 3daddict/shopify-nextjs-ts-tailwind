import { useEffect } from "react";

export default function Home() {

  useEffect(() => {

  }, []);

  const message: string = "TypeScript + React + Next.js"
  let age: number = 100;

  return (
    <div>
      {message} {age}
    </div>
  )
}
