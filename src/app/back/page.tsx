import EditGreeting from "../components/editGreeting"

type Greeting = {
  greeting:string;
  _id: string;
}
    
export default async function Back() {
  const baseUrl = "nextmongo-1ql6hedud-margrets-projects.vercel.app"
  const response = await fetch(`${baseUrl}/api`)
  const greetings: Greeting[] = await response.json()
  return (
    <div>
      {greetings.map(greetingObj=>
        <EditGreeting greetingObj={greetingObj} key={greetingObj._id.toString()}/>
      )}
    </div>
  )
}