const layers = [
  {
    name: "Local Authority Distrcit",
    description: "",
    gc: "la_code",
    gURL: "https://raw.githubusercontent.com/saferactive/tgve/main/las-only-code.geojson",
    dURL: "https://raw.githubusercontent.com/saferactive/tgve/main/ksi.csv"
  },
  {
    name: "Police Force",
    description: "",
    gc: "police_force",
    gURL: "https://raw.githubusercontent.com/saferactive/tgve/main/pf-only-name.geojson",
    dURL: "https://raw.githubusercontent.com/saferactive/tgve/main/ksi-pf.csv"
  }];

export {
  layers
}