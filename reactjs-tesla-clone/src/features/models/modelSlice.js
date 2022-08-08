import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carModels : ["Model 3", "Model S", "Model X", "Model Y", "Solar Roof", "Solar Panels"],
    sideMenuItems: ["Model 3", "Model S", "Model X", "Model Y", "Existing Inventory", "Used Inventory", "Trade-In", "Test Drive", 
                    "Cybertruck", "Roadster", "Semi", "Charging", "Powerwall", "Commercial Energy",
                     "Find Us", "Support", "Investor Relations", "United States"
                    ]
}

const modelSlice  = createSlice(   {
    name: "model",
    initialState,
    reducers: {
                }

} )

export const selectCarModels = (state) => state.model.carModels;
export const selectSideMenuItems = (state) => state.model.sideMenuItems;

export default modelSlice.reducer;