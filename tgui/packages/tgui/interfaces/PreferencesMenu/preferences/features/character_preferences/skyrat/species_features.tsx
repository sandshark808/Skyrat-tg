import { FeatureChoiced, FeatureDropdownInput, Feature, FeatureColorInput, FeatureTextInput, FeatureShortTextInput, CheckboxInput, FeatureTriColorInput, FeatureToggle } from "../../base";

export const feature_leg_type: FeatureChoiced = {
  name: "Leg type",
  component: FeatureDropdownInput,
};

export const feature_mcolor2: Feature<string> = {
  name: "Mutant color 2",
  component: FeatureColorInput,
};
export const feature_mcolor3: Feature<string> = {
  name: "Mutant color 3",
  component: FeatureColorInput,
};

export const flavor_text: Feature<string> = {
  name: "Flavor Text",
  description: "Describe your character!",
  component: FeatureTextInput,
};

export const silicon_flavor_text: Feature<string> = {
  name: "Flavor Text (Silicon)",
  description: "Describe your cyborg/AI shell!",
  component: FeatureTextInput,
};

export const ooc_notes: Feature<string> = {
  name: "OOC Notes",
  description: "Talk about your character OOCly!",
  component: FeatureTextInput,
};

export const custom_species: Feature<string> = {
  name: "Custom Species Name",
  description: "Want to have a fancy species name? Put it here, or leave it blank if you want to use your species' default name.",
  component: FeatureShortTextInput,
};

export const custom_species_lore: Feature<string> = {
  name: "Custom Species Lore",
  description: "Add some lore for your species! Won't show up if there's no custom species.",
  component: FeatureTextInput,
};

export const allow_mismatched_parts_toggle: FeatureToggle = {
  name: "Allow Mismatched Parts",
  description: "Want to go completely crazy with your character design? Use this to select any parts from any species!",
  component: CheckboxInput,
};

export const mutant_colors_color: Feature<string[]> = {
  name: "Mutant Colors",
  description: "Legacy colors for controlling shit.",
  component: FeatureTriColorInput,
};

export const body_markings_toggle: FeatureToggle = {
  name: "Body Markings",
  description: "Add some lore for your species! Won't show up if there's no custom species.",
  component: CheckboxInput,
};

export const feature_body_markings: Feature<string> = {
  name: "Body Markings Selection",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureDropdownInput,
};

export const body_markings_color: Feature<string[]> = {
  name: "Body Markings Colors",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureTriColorInput,
};

export const tail_toggle: FeatureToggle = {
  name: "Tail",
  description: "Add some lore for your species! Won't show up if there's no custom species.",
  component: CheckboxInput,
};

export const feature_tail: Feature<string> = {
  name: "Tail Selection",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureDropdownInput,
};

export const tail_color: Feature<string[]> = {
  name: "Tail Colors",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureTriColorInput,
};

export const snout_toggle: FeatureToggle = {
  name: "Snout",
  description: "Add some lore for your species! Won't show up if there's no custom species.",
  component: CheckboxInput,
};

export const feature_snout: Feature<string> = {
  name: "Snout Selection",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureDropdownInput,
};

export const snout_color: Feature<string[]> = {
  name: "Snout Colors",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureTriColorInput,
};

export const horns_toggle: FeatureToggle = {
  name: "Horns",
  description: "Add some lore for your species! Won't show up if there's no custom species.",
  component: CheckboxInput,
};

export const feature_horns: Feature<string> = {
  name: "Horns Selection",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureDropdownInput,
};

export const horns_color: Feature<string[]> = {
  name: "Horns Colors",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureTriColorInput,
};

export const ears_toggle: FeatureToggle = {
  name: "Ears",
  description: "Add some lore for your species! Won't show up if there's no custom species.",
  component: CheckboxInput,
};

export const feature_ears: Feature<string> = {
  name: "Ears Selection",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureDropdownInput,
};

export const ears_color: Feature<string[]> = {
  name: "Ears Colors",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureTriColorInput,
};

export const wings_toggle: FeatureToggle = {
  name: "Wings",
  description: "Add some lore for your species! Won't show up if there's no custom species.",
  component: CheckboxInput,
};

export const feature_wings: Feature<string> = {
  name: "Wings Selection",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureDropdownInput,
};

export const wings_color: Feature<string[]> = {
  name: "Wings Colors",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureTriColorInput,
};

export const frills_toggle: FeatureToggle = {
  name: "Frills",
  description: "Add some lore for your species! Won't show up if there's no custom species.",
  component: CheckboxInput,
};

export const feature_frills: Feature<string> = {
  name: "Frills Selection",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureDropdownInput,
};

export const frills_color: Feature<string[]> = {
  name: "Frills Colors",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureTriColorInput,
};

export const spines_toggle: FeatureToggle = {
  name: "Spines",
  description: "Add some lore for your species! Won't show up if there's no custom species.",
  component: CheckboxInput,
};

export const feature_spines: Feature<string> = {
  name: "Spines Selection",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureDropdownInput,
};

export const spines_color: Feature<string[]> = {
  name: "Spines Colors",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureTriColorInput,
};

export const legs_toggle: FeatureToggle = {
  name: "Legs",
  description: "Add some lore for your species! Won't show up if there's no custom species.",
  component: CheckboxInput,
};

export const feature_legs: Feature<string> = {
  name: "Legs Selection",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureDropdownInput,
};

export const legs_color: Feature<string[]> = {
  name: "Legs Colors",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureTriColorInput,
};

export const caps_toggle: FeatureToggle = {
  name: "Cap",
  description: "Add some lore for your species! Won't show up if there's no custom species.",
  component: CheckboxInput,
};

export const feature_caps: Feature<string> = {
  name: "Cap Selection",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureDropdownInput,
};

export const caps_color: Feature<string[]> = {
  name: "Cap Colors",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureTriColorInput,
};

export const moth_antennae_toggle: FeatureToggle = {
  name: "Moth Antenna",
  description: "Add some lore for your species! Won't show up if there's no custom species.",
  component: CheckboxInput,
};

export const feature_moth_antennae: Feature<string> = {
  name: "Moth Antenna Selection",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureDropdownInput,
};

export const moth_antennae_color: Feature<string[]> = {
  name: "Moth Antenna Colors",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureTriColorInput,
};

export const moth_markings_toggle: FeatureToggle = {
  name: "Moth Markings",
  description: "Add some lore for your species! Won't show up if there's no custom species.",
  component: CheckboxInput,
};

export const feature_moth_markings: Feature<string> = {
  name: "Moth Markings Selection",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureDropdownInput,
};

export const moth_markings_color: Feature<string[]> = {
  name: "Moth Markings Colors",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureTriColorInput,
};

export const fluff_toggle: FeatureToggle = {
  name: "Fluff",
  description: "Add some lore for your species! Won't show up if there's no custom species.",
  component: CheckboxInput,
};

export const feature_fluff: Feature<string> = {
  name: "Fluff Selection",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureDropdownInput,
};

export const fluff_color: Feature<string[]> = {
  name: "Fluff Colors",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureTriColorInput,
};

export const head_acc_toggle: FeatureToggle = {
  name: "Head Accessories",
  description: "Add some lore for your species! Won't show up if there's no custom species.",
  component: CheckboxInput,
};

export const feature_head_acc: Feature<string> = {
  name: "Head Accessories Selection",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureDropdownInput,
};

export const head_acc_color: Feature<string[]> = {
  name: "Head Accessories Colors",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureTriColorInput,
};

export const ipc_screen_toggle: FeatureToggle = {
  name: "IPC Screen",
  description: "Add some lore for your species! Won't show up if there's no custom species.",
  component: CheckboxInput,
};

export const feature_ipc_screen: Feature<string> = {
  name: "IPC Screen Selection",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureDropdownInput,
};

export const ipc_screen_color: Feature<string[]> = {
  name: "IPC Screen Colors",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureTriColorInput,
};

export const ipc_antenna_toggle: FeatureToggle = {
  name: "IPC Antenna",
  description: "Add some lore for your species! Won't show up if there's no custom species.",
  component: CheckboxInput,
};

export const feature_ipc_antenna: Feature<string> = {
  name: "IPC Antenna Selection",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureDropdownInput,
};

export const ipc_antenna_color: Feature<string[]> = {
  name: "IPC Antenna Colors",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureTriColorInput,
};

export const ipc_chassis_toggle: FeatureToggle = {
  name: "IPC Chassis",
  description: "Add some lore for your species! Won't show up if there's no custom species.",
  component: CheckboxInput,
};

export const feature_ipc_chassis: Feature<string> = {
  name: "IPC Chassis Selection",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureDropdownInput,
};

export const ipc_chassis_color: Feature<string[]> = {
  name: "IPC Chassis Colors",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureTriColorInput,
};

export const neck_acc_toggle: FeatureToggle = {
  name: "Neck Accessories",
  description: "Add some lore for your species! Won't show up if there's no custom species.",
  component: CheckboxInput,
};

export const feature_neck_acc: Feature<string> = {
  name: "Neck Accessories Selection",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureDropdownInput,
};

export const neck_acc_color: Feature<string[]> = {
  name: "Neck Accessories Colors",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureTriColorInput,
};

export const skrell_hair_toggle: FeatureToggle = {
  name: "Skrell Hair",
  description: "Add some lore for your species! Won't show up if there's no custom species.",
  component: CheckboxInput,
};

export const feature_skrell_hair: Feature<string> = {
  name: "Skrell Hair Selection",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureDropdownInput,
};

export const skrell_hair_color: Feature<string[]> = {
  name: "Skrell Hair Colors",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureTriColorInput,
};

export const taur_toggle: FeatureToggle = {
  name: "Taur",
  description: "Add some lore for your species! Won't show up if there's no custom species.",
  component: CheckboxInput,
};

export const feature_taur: Feature<string> = {
  name: "Taur Selection",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureDropdownInput,
};

export const taur_color: Feature<string[]> = {
  name: "Taur Colors",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureTriColorInput,
};

export const xenodorsal_toggle: FeatureToggle = {
  name: "Xenodorsal",
  description: "Add some lore for your species! Won't show up if there's no custom species.",
  component: CheckboxInput,
};

export const feature_xenodorsal: Feature<string> = {
  name: "Xenodorsal Selection",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureDropdownInput,
};

export const xenodorsal_color: Feature<string[]> = {
  name: "Xenodorsal Colors",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureTriColorInput,
};

export const xenohead_toggle: FeatureToggle = {
  name: "Xeno Head",
  description: "Add some lore for your species! Won't show up if there's no custom species.",
  component: CheckboxInput,
};

export const feature_xenohead: Feature<string> = {
  name: "Xeno Head Selection",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureDropdownInput,
};

export const xenohead_color: Feature<string[]> = {
  name: "Xeno Head Colors",
  description: "Want to have a fancy species name? Put it here, or leave it blank.",
  component: FeatureTriColorInput,
};

export const skin_tone_toggle: FeatureToggle = {
  name: "Uses skintone",
  component: CheckboxInput,
};

export const undershirt_color: Feature<string> = {
  name: "Undershirt color",
  component: FeatureColorInput,
};

export const socks_color: Feature<string> = {
  name: "Socks color",
  component: FeatureColorInput,
};
