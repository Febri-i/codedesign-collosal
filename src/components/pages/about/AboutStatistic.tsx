import StatisticCard from "./AboutStatisticCard";
// TODO: USE ACTUAL DATA.
export default function AboutStatistic() {
  return (
    <div class="flex portrait:flex-col portrait:gap-5 landscape:px-20 py-5 landscape:glass justify-between shadow-xl rounded-md">
      <StatisticCard src="/icons/flag.svg" detail="8" title="COUNTRIES" />
      <StatisticCard src="/icons/user.svg" detail="193" title="CLIENTS" />
      <StatisticCard src="/icons/dollar.svg" detail="$100k" title="EARNING" />
    </div>
  );
}
