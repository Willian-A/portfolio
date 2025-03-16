import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useURLParams = (fieldName: string) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  return (value: string | number) => {
    const params = new URLSearchParams(searchParams);

    if (!!value) {
      params.set(fieldName, String(value));
    } else {
      params.delete(fieldName);
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };
};
