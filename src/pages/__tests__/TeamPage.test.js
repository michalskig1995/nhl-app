import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { render, screen, waitFor } from "@testing-library/react";
import TeamPage from "../TeamPage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    teamId: 1
  })
}));

describe("TeamPage", () => {
  beforeEach(() => jest.clearAllMocks());

  it("renders the NHL TeamPage from NHL teams api for a given team", async () => {
    const wrapper = render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TeamPage />} />
        </Routes>
      </BrowserRouter>
    );
    await waitFor(() => {
      // Ensure page has loaded
      screen.getByText("New Jersey Devils");
      expect(wrapper).toMatchSnapshot();
    });
  });
});
