import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { MutableRefObject, useEffect, useState } from "react";
import { DateFormatter, DayPicker } from "react-day-picker";
import { useFormContext } from "react-hook-form";

import iconCalendarGrey from "@/assets/icons/icon_calendar-grey.svg";
import iconCalendar from "@/assets/icons/icon_calendar.svg";
import ImageSection from "@/common/components/image";
import "react-day-picker/dist/style.css";

import { Popover } from "@headlessui/react";

type Props = {
  placeholder?: string;
  inputClassName?: string;
  registerName?: string;
  disabledDate?:
    | Date
    | undefined
    | { from: Date | undefined; to: Date | undefined }[];
};

/**
 * * Calendar(Day Picker) 컴포넌트를 리턴한다
 * @param {string} placeholder - placeholder를 작성해주세요
 * @param {string} inputClassName - inputClassName을 작성해주세요
 * @param {string} registerName - registerName을 작성해주세요
 */

const Calendar = ({
  placeholder,
  inputClassName,
  registerName,
  disabledDate,
}: Props) => {
  const formatCaption: DateFormatter = (date, options) =>
    format(date, "yyyy년 M월", { locale: options?.locale });

  const [selected, setSelected] = useState<Date | undefined>();

  const { setValue, watch } = useFormContext();

  useEffect(() => {
    if (!registerName) return;
    setSelected(watch(registerName));
  }, [watch(registerName as string)]);

  const handlerOnDayClick =
    (
      registerName: string | undefined,
      close: (
        focusableElement?: HTMLElement | MutableRefObject<HTMLElement | null>,
      ) => void,
    ) =>
    (day: Date) => {
      //  DATEPICKER가 2개 연속으로 사용할 떄 사용
      // if (registerName === "startDate" && watch("endDate")) {
      //   if (new Date(day) > new Date(watch("endDate"))) {
      //     alert(
      //       `시작일이 종료일보다 빠를 수 없습니다. \n종료일을 다시 설정해주세요.`,
      //     );
      //   }
      // }
      close();
      if (!registerName) return;
      setValue(registerName, day);
    };

  return (
    <Popover>
      <style>{calendarComponentCSS}</style>
      <div className="relative w-[250px]">
        <Popover.Button className="flex flex-col gap-1 relative w-full">
          <input
            readOnly
            type="text"
            placeholder={placeholder ?? "날짜를 선택해주세요"}
            className={`${inputDefaultClassName} ${inputClassName}`}
            value={selected ? format(selected, "yyyy년 M월 d일") : ""}
          />
          <ImageSection
            src={selected ? iconCalendar : iconCalendarGrey}
            className={calendarImageSectionCSS}
          />
        </Popover.Button>
        <Popover.Panel className="absolute top-[2.625rem] left-0 bg-white z-10">
          {({ close }) => (
            <DayPicker
              locale={ko}
              mode="single"
              selected={selected}
              onSelect={setSelected}
              formatters={{ formatCaption }}
              defaultMonth={selected}
              onDayClick={handlerOnDayClick(registerName, close)}
              disabled={disabledDate ? disabledDate : undefined}
            />
          )}
        </Popover.Panel>
      </div>
    </Popover>
  );
};

export default Calendar;
const calendarImageSectionCSS =
  "w-5 h-5 !absolute right-1 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer border-0";
const calendarComponentCSS = `
  .rdp {
    margin: 0;
  }
  .rdp-table{
    display:block;
    border:1px solid #dadada;
    border-top:none;
    padding:0.25rem 0.75rem;
    border-spacing: 1rem;
  }
  .rdp-caption { 
    background-color:#273150;
    padding:0.438rem 0.8125rem;
  }
  .rdp-caption_label{
    font-size:0.938rem;
    color:#fff;
    font-weight: 400;
  }
  .rdp-nav{
    display:flex;
    align-items:center;
    gap:0.5rem;
  }
  .rdp-nav_button {
    padding: 0;
    width:fit-content;
    height:fit-content;
    &:hover{
      > svg {
        color:#273150;
      }
    }
    > svg {
      width:11px;
      height:11px;
      color:#fff;
    }
  }
  .rdp-head{
    .rdp-head_row{
      .rdp-head_cell{
        color:#222;
        font-weight:400;
        font-size:0.813rem;
      }
    }
  }
  .rdp-row{
    .rdp-cell{
      width:2rem;
      height:1.75rem;
      .rdp-day{
        width:100%;
        height:100%;
        font-size:0.8125rem;
        color:#222;
        &.rdp-day_selected{
          border-radius:4px;
          background-color:#f0f6fd;
          border:2px solid #e0ebf7 
        }
        &:hover {
          border-radius:4px;
          background-color:#f0f6fd;
          border:2px solid #e0ebf7 
        }
      }
      &:first-child {
        .rdp-day{
          color:#ed2024;
        }
      }
      &:last-child {
        .rdp-day{
          color:#237EDF;
        }
      }
    }
  }
`;

const inputDefaultClassName =
  "date-picker-input border border-line hover:border-black focus:border-black outline-0 placeholder:text-light py-2 px-4 w-full";
