import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { SetStateAction, useState } from "react";
import { ExcelRenderer, OutTable } from "react-excel-renderer";
import { SiMicrosoftexcel } from "react-icons/si";
import { Card } from "reactstrap";
import Loading from "./loading";
import run from "@/app/models/generative-ai";

export default function WholeProductPage() {
  let file: any;
  const [Json, setJson] = useState("");
  const [cols, setCols] = useState([]);
  const [rows, setRows] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [Prompt, setPrompt] = useState("");
  const [Res, setRes] = useState<string>();

  async function fileHandler() {
    let fileObj = file[0]; //just pass the fileObj as parameter
    setIsloading(true);
    await ExcelRenderer(
      fileObj,
      (
        err: any,
        resp: { cols: SetStateAction<never[]>; rows: SetStateAction<never[]> }
      ) => {
        if (err) {
          console.log(err);
        } else {
          setCols(resp.cols);
          setRows(resp.rows);
          setJson(JSON.stringify(resp.rows));
        }
      }
    );
    setIsloading(false);
  }

  async function callModel() {
    console.log("Json",Json);
    setRes(await run(Prompt,Json));
  }

  return isloading ? (
    <Loading />
  ) : (
    <div className="flex flex-row max-w-screen my-4 mx-6 gap-4">
      <div className="border border-gray-400 rounded-lg w-1/2 max-w-1/2 h-[90vh]">
        <div className="w-full">
          <Card body outline color="secondary" className="restrict-card">
            <OutTable
              data={rows}
              columns={cols}
              tableClassName="ExcelTable2007"
              tableHeaderRowClass="heading"
            />
          </Card>
        </div>
      </div>
      <div className="flex flex-col justify-between place-items-start border border-gray-400 rounded-lg w-full min-w-1/2 h-[90vh]">
        <div className="h-full w-full">
          <div className="w-fit h-fit m-2 border border-gray-400 rounded-lg">
            {Res}
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-row gap-2 m-2">
            <Dialog>
              <DialogTrigger className="border border-gray-300 p-2 rounded-lg">
                <SiMicrosoftexcel />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Upload your excel file here</DialogTitle>
                  <DialogDescription>
                    Browse your excel file to analyse using promptu
                  </DialogDescription>
                </DialogHeader>
                <Input
                  onChange={(e) => {
                    file = e.target.files;
                  }}
                  type="file"
                  accept=".xlsx,.xlsm,.xlsb,.xml,.csv,.xls,"
                ></Input>
                <DialogClose>
                  <Button
                    onClick={() => {
                      fileHandler();
                    }}
                  >
                    Submit
                  </Button>
                </DialogClose>
              </DialogContent>
            </Dialog>
            <Input
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="ex.Age beetween 20-30 and living in india"
            />

            <Button
              onClick={() => {
                callModel();
              }}
            >
              Generate
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
