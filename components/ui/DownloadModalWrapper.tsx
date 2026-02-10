"use client";

import { useDownloadModal } from "@/contexts/DownloadModalContext";
import DownloadModal from "./DownloadModal";

const DownloadModalWrapper = () => {
  const { isOpen, closeModal } = useDownloadModal();

  return <DownloadModal isOpen={isOpen} onClose={closeModal} />;
};

export default DownloadModalWrapper;
