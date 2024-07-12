import React, {ReactNode} from "react";

interface ContentProps {
    children: ReactNode;
}

export const Content: React.FC<ContentProps> = ({children}) => {
    return (<>
        <div>
            {children}
        </div>
    </>);
}
