import { PostContext } from "../App"
import { useContext } from "react"

export default function SearchPosts (){
  const {searchQuery, setSearchQuery} = useContext(PostContext)
    return (
        <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
    )
}

