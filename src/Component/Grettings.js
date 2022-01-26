import React from 'react';
function Greetings ({lang,children}){
    return <div >
        {langList({lang})} {children}
    </div>
}