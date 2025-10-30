'use client';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import {Avatar,AvatarFallback,AvatarImage} from "@/components/ui/avatar"
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import {LogOut} from "lucide-react";
import NavItems from "@/components/NavItems";

const UserDropdown = () => {
    const router=useRouter();

    const handleSignOut=async()=>{
        router.push("/sign-in");
    }
    const user = {name: 'John',email: 'contact@bearnbull.com'};
    return (
        <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-centre gap-3 text-grey-4 hover:text-yellow-500">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src="https://avatars.githubusercontent.com/u/153423955?s=2806v=4"/>
                            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                                {user.name[0]}
                            </AvatarFallback>
                        </Avatar>
                        <div className="hidden md:flex flex-col items-start">
                            <span className='text-base font-medium text-grey-400'>
                                {user.name}
                            </span>
                        </div>
                    </Button>
                </DropdownMenuTrigger>
            <DropdownMenuContent className="text-grey-400">

                <DropdownMenuLabel>
                    <div className="flex relative item-centre gap py-2">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src="https://avatars.githubusercontent.com/u/153423955?s=2806v=4"/>
                            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                                {user.name[0]}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <span className='text-base font-medium text-grey-400'>
                                {user.name}
                            </span>
                            <span className="text-sm text-grey-500">{user.email}</span>
                        </div>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-grey-600"/>
                <DropdownMenuItem onClick={handleSignOut} className="text-grey-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colours cursor-pointer">
                    <LogOut className="h-4 w-4 mr-2 hidden sm:block"/>
                    Logout
                </DropdownMenuItem>
                <DropdownMenuSeparator className="hidden sm:block bg-grey-600"/>
                <nav className="sm:hidden">
                    <NavItems/>
                </nav>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default UserDropdown
