import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { render, screen, waitFor } from "@testing-library/react";
import Players from "../Players";

describe("Players", () => {
  beforeEach(() => jest.clearAllMocks());

  it("renders the NHL players from NHL teams api call", async () => {
    const wrapper = render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Players />} />
        </Routes>
      </BrowserRouter>
    );
    await waitFor(() => {
      // Ensure page has loaded
      screen.getByText("Players");
      expect(wrapper).toMatchSnapshot();
    });
  });
});
