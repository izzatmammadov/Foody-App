import { Button } from "../Button";
import { Langugages } from "../Languages";

export const AdminNavbarAvatar = ({ isName }: any) => {
  return (
    <div className="flex items-center gap-7 relative">
      <Langugages />
      <Button
        className="rounded-full w-10 h-10 text-lg text-white shadow-md bg-mainRed font-semibold cursor-default"
        innerText={isName}
      />
    </div>
  );
};
