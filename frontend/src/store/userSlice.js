import { createSlice } from "@reduxjs/toolkit";

// Création de la tranche "userSlice"
const userSlice = createSlice({
  name: "user", // Nom de la tranche
  initialState: {
    isConnected: false, 
    userInfo: "", 
    userAddress: "", 
    token: "", 
  },
  
  reducers: {
    
    // Action pour inverser la valeur de isConnected
    connectedToggle: (state) => {
      state.isConnected = !state.isConnected;
    },
    // Action pour mettre à jour userInfo avec la valeur fournie
    setUserInfo: (state, action) => {
      state.userInfo = action.payload ;
    },
    // Action pour mettre à jour token avec la valeur fournie
    setToken: (state, action) => {
      state.token = action.payload;
    },
    // Action pour mettre à jour userAddress avec la valeur fournie
    setUserAddress: (state, action) => {
      state.userAddress = action.payload;
    },
    // Action pour mettre à jour l'email dans userInfo avec la valeur fournie
    changeEmail: (state, action) => {
      state.userInfo.email = action.payload;
    },
  },
});

// Export des actions individuelles de la tranche
export const {
  connectedToggle,
  setUserInfo,
  setToken,
  setUserAddress,
  changeEmail,
} = userSlice.actions;

// Export du réducteur de la tranche
export default userSlice.reducer;