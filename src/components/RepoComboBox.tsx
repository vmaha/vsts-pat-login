import { createComboBox } from "./ListComboBox";
import { Repo } from "../models/Repo";

export const RepoComboBox = createComboBox<Repo>("Project");