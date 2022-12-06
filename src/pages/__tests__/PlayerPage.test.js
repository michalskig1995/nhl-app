import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { render, screen, waitFor } from "@testing-library/react";
import PlayerPage from "../PlayerPage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    playerId: 8482076
  })
}));

describe("PlayerPage", () => {
  beforeEach(() => jest.clearAllMocks());

  it("renders the NHL PlayerPage from NHL players api for a given player", async () => {
    const wrapper = render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PlayerPage />} />
        </Routes>
      </BrowserRouter>
    );
    await waitFor(() => {
      // Ensure page has loaded
      screen.getByText("Nico Daws");
      expect(wrapper).toMatchSnapshot();
    });
  });
});
