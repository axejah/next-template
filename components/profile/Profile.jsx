import {useSession} from "next-auth/react"

const Profile = () => {
    const {data: session} = useSession();

    if (!session?.user) {
        return <div>You are not authenticated</div>;
    }

    return (
        <header>
            <div>Emailaddress: {session?.user?.email}</div>
        </header>
    )
}

export default Profile