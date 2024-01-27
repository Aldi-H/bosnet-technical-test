/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import TableComponent from "@/components/Table";
import { generateDummyData } from "@/utils/DataDummy";

import { IoCaretBack, IoCaretForward } from "react-icons/io5";
import {
  FaForward,
  FaForwardStep,
  FaBackward,
  FaBackwardStep,
} from "react-icons/fa6";
import { useCallback, useEffect, useState } from "react";

interface EmployeeData {
  szNo: number;
  szId: string;
  szName: string;
  dtmBirthday: Date;
  szAge: number;
}

interface UiData {
  lblNo: number;
  lblId: number;
  lblName: string;
  lblBirthday: string;
  lblAge: number;
}

export default function Home() {
  const [employeeList, setEmployeeList] = useState<EmployeeData[]>([]);
  const [uiList, setUiList] = useState<UiData[]>([]);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [updateUIInProgress, setUpdateUIInProgress] = useState(false);
  const pageSize = 5; // Number of items per page

  const btnFirst_Click = () => {
    setCurrentPageIndex(0);
    setUpdateUIInProgress(true);
  };

  const btnPreviousPage_Click = () => {
    setCurrentPageIndex((prev) => Math.max(0, prev - 1));
    setUpdateUIInProgress(true);
  };

  const btnPrevious_Click = () => {
    setCurrentPageIndex((prev) => Math.max(0, prev - 1));
    setUpdateUIInProgress(true);
  };

  const btnNext_Click = () => {
    const maxPageIndex = Math.floor((employeeList.length - 1) / pageSize);
    const nextPageIndex = Math.min(maxPageIndex, currentPageIndex + 1);
    setCurrentPageIndex(nextPageIndex);
    setUpdateUIInProgress(true);
  };

  const btnNextPage_Click = () => {
    const maxPageIndex = Math.floor(
      (employeeList.length - pageSize) / pageSize,
    );
    setCurrentPageIndex((prev) => Math.min(maxPageIndex, prev + 1));
    setUpdateUIInProgress(true);
  };

  const btnLast_Click = () => {
    const maxPageIndex = Math.floor(
      (employeeList.length - pageSize) / pageSize,
    );
    setCurrentPageIndex(maxPageIndex);
    setUpdateUIInProgress(true);
  };

  const updateUI = useCallback(
    (data: EmployeeData[]) => {
      const startIndex = currentPageIndex * pageSize;
      const endIndex = Math.min(startIndex + pageSize - 1, data.length - 1);

      const updatedUiList: UiData[] = [];
      for (let i = startIndex; i <= endIndex; i++) {
        updatedUiList.push({
          lblNo: i + 1,
          lblId: parseInt(data[i].szId, 10),
          lblName: data[i].szName,
          lblBirthday: data[i].dtmBirthday.toLocaleDateString("en-US"),
          lblAge: data[i].szAge,
        });
      }

      setUiList(updatedUiList);
    },
    [currentPageIndex, pageSize, setUiList],
  );

  useEffect(() => {
    const data = generateDummyData();
    setEmployeeList(
      data.map((item) => ({
        szNo: item.no,
        szId: item.id.toString(),
        szName: item.name,
        dtmBirthday: new Date(item.birthday),
        szAge: item.age,
      })),
    );
    setCurrentPageIndex(0);
    const convertedData: EmployeeData[] = data.map((item) => ({
      szNo: item.no,
      szId: item.id.toString(),
      szName: item.name,
      dtmBirthday: new Date(item.birthday),
      szAge: item.age,
    }));
    updateUI(convertedData);
  }, []);

  useEffect(() => {
    if (updateUIInProgress) {
      updateUI(employeeList);
      setUpdateUIInProgress(false);
    }
  }, [updateUIInProgress, employeeList]);

  const formattedUiList = uiList.map((item) => ({
    no: item.lblNo,
    id: item.lblId,
    name: item.lblName,
    birthday: item.lblBirthday,
    age: item.lblAge,
  }));

  return (
    <div>
      <TableComponent data={formattedUiList} />

      <div className="flex flex-row px-2 space-x-5 m-4">
        <div className="flex flex-row space-x-5">
          <button onClick={() => btnFirst_Click()}>
            <FaBackwardStep />
          </button>
          <button onClick={() => btnPreviousPage_Click()}>
            <FaBackward />
          </button>
          <button onClick={() => btnPrevious_Click()}>
            <IoCaretBack />
          </button>
        </div>
        <div className="flex flex-row space-x-5">
          <button onClick={() => btnNext_Click()}>
            <IoCaretForward />
          </button>
          <button onClick={() => btnNextPage_Click()}>
            <FaForward />
          </button>
          <button onClick={() => btnLast_Click()}>
            <FaForwardStep />
          </button>
        </div>
      </div>
    </div>
  );
}
