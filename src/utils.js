const layers = [
  {
    name: "Local Authority District",
    description: "District level cycle casualty KSI (Killed or Seriously Injured) statistics, 2010 - 2019",
    gc: "la_code",
    gURL: "https://raw.githubusercontent.com/saferactive/tgve/main/las-only-code.geojson",
    dURL: "https://raw.githubusercontent.com/saferactive/tgve/main/ksi.csv"
  },
  {
    name: "Police Force",
    description: "Police force level cycle casualty KSI statistics, 2010 - 2019",
    gc: "police_force",
    gURL: "https://raw.githubusercontent.com/saferactive/tgve/main/pf-only-name.geojson",
    dURL: "https://raw.githubusercontent.com/saferactive/tgve/main/ksi-pf.csv"
  }];

export {
  layers
}