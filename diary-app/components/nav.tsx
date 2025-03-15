import { FaFolderPlus, FaFolder } from "react-icons/fa";

export default function Nav(){
    return(
            <ul className="flex justify-between py-10">
                <li className="flex gap-4">
                    <FaFolderPlus size="50"/>
                    <FaFolder size="50"/>
                    <FaFolder size="50"/>
                </li>
                <li>
                    메뉴
                </li>
            </ul>  
    );
}