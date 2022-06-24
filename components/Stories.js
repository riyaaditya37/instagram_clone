import {faker} from '@faker-js/faker'
import Story from "./Story";
import { useEffect, useState } from "react";
import {useSession} from "next-auth/react";

function Stories() {
  const { data: session, status } = useSession()
  const [suggestions, setSuggestions] = useState([]);

  
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
       
        id:i,
        username:faker.internet.userName(),
        avater:faker.image.avatar()
       
    }));
    setSuggestions(suggestions);
},[]);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll 
    scrollbar-thin scrollbar-thumb-black ">
      {session  && (
        <Story
        img={session.user.image}
        username={session.user.username}
        />
      )}
      {/*  list of stories */}
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avater}
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;