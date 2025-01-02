export const fetchSkillsLevel2 = async () => {
  try {
    const level2Res = await fetch(
      "https://protfolio-web-server-orcin.vercel.app/level"
    );
    console.log("level2", level2Res);
    if (!level2Res.ok) {
      throw new Error(`HTTP error! status: ${level2Res.status}`);
    }
    const level2Skills = await level2Res.json();
    return level2Skills; // Returning the fetched data
  } catch (error) {
    console.error("Error fetching skills:", error);
    return []; // Return an empty array if there's an error
  }
};
