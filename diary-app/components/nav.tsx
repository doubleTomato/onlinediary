import { FaFolderPlus } from "react-icons/fa";

export default function Nav(){
    return(
            <ul className="flex justify-between pt-20">
                <li>
                    <FaFolderPlus size="50"/>
                </li>
                <li>
                    메뉴
                </li>
            </ul>  
    );
}