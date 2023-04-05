import React from "react";
import Image from "next/image";

function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      <Image
        src="https://links.papareact.com/1m8"
        height={50}
        width={50}
        className="rounded-full object-cover"
        alt="logo"
      />
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  );
}

export default Logo;
