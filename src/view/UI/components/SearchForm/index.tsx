import { FC, useState } from "react";
import { IFormData, ISearchForm } from "./types";
import { Form } from "./components/Form";
import { MinifiedForm } from "./components/MinifiedForm";
import { SubmitHandler } from "react-hook-form";

export const SearchForm: FC<ISearchForm> = ({
  loading = false,
  origin,
  destination,
  minified,
  className,
  onSearch,
}) => {
  const [isMinified, setMinified] = useState(minified);

  const handleSetMinified = () => {
    setMinified(!isMinified);
  };

  const handleSearch: SubmitHandler<IFormData> = (...args) => {
    onSearch(...args);
    minified && setMinified(true);
  };

  if (isMinified) {
    return (
      <MinifiedForm
        loading={loading}
        className={className}
        origin={origin}
        destination={destination}
        onExpand={handleSetMinified}
      />
    );
  }

  return (
    <Form
      loading={loading}
      minified={minified}
      origin={origin}
      className={className}
      destination={destination}
      onSearch={handleSearch}
      onExpand={handleSetMinified}
    />
  );
};
