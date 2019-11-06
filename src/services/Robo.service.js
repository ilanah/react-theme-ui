export async function get_all_robots() {
  const response = await fetch("https://api.myjson.com/bins/h8qfg");
  if (!response.ok)
    throw new Error("Failed to fetch Robots - Network response was not ok.");
  return await response.json();
}
