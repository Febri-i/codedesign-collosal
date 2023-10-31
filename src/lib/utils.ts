export function getProjectUrl(project_id: string) {
  return "/projects/" + project_id;
}
export function getServiceUrl(service_name: string) {
  return "/services/" + service_name;
}
export function getBlogUrl(blog_id: string) {
  return "/blogs/" + blog_id;
}

export async function gqlCall(query: string) {
  const queryFinale = JSON.stringify({ query });

  const response = await fetch("/graphql", {
    method: "POST",
    body: queryFinale,
  });
  console.log(response);
  if (!response.ok) return;
  const gqlResponse = await response.json();
  if (gqlResponse.errors) return;
  return gqlResponse.data;
}

export function parseISOtoString(date: string): string {
  const now = new Date(Date.now());
  const _date = new Date(date);
  const dateDelta = now.getTime() - _date.getTime();

  if (dateDelta < 86400000) return parseMilisecondToString(dateDelta) + " ago";
  const monthAbbr: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    _date.getDate() +
    " " +
    monthAbbr[_date.getMonth()] +
    " " +
    _date.getFullYear()
  );
}
export function parseMilisecondToString(durationMiliseconds: number): string {
  let formatted: number = durationMiliseconds;
  let formattedStr: string = "";

  const formats: { ascend: number; name: string }[] = [
    {
      ascend: 1000,
      name: "Seconds",
    },
    { ascend: 60, name: "Minute" },
    { ascend: 60, name: "Hour" },
    { ascend: 24, name: "Day" },
  ];
  let i = 0;
  do {
    if (i >= formats.length) break;
    formatted /= formats[i].ascend;
    if (formatted < 1) break;
    const floored = Math.floor(formatted);
    formattedStr = floored + " " + formats[i].name;
    i++;
  } while (Math.floor(formatted));
  return formattedStr;
}
