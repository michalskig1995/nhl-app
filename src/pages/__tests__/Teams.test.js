import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { render, screen, waitFor } from "@testing-library/react";
import Teams from "../Teams";

describe("Teams", () => {
  beforeEach(() => jest.clearAllMocks());

  it("renders the NHL teams from NHL teams api call", async () => {
    const wrapper = render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Teams />} />
        </Routes>
      </BrowserRouter>
    );
    await waitFor(() => {
      // Ensure page has loaded
      screen.getByText("Teams");
      expect(wrapper).toMatchSnapshot();
    });
  });
});
