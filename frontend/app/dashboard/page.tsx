"use server";

type File = {
  id: number;
  name: string;
  size: string;
};

function FileItem({ file }: { file: File }) {
  return (
    <div className="bg-emerald-200 rounded flex justify-between items-center p-2">
      <h2 className="font-mono">{file.name}</h2>
      <p className="text-sm font-mono">{file.size}</p>
    </div>
  );
}

export default async function Page() {
  // fetch files from /files

  async function createFile(formData: FormData) {
    "use server";
    const rawData = {
      name: formData.get("name"),
      size: formData.get("size"),
    };
    const response = await fetch("http://localhost:8000/files", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rawData),
    });
    const data = await response.json();
    return data;
  }

  async function fetchFiles() {
    const response = await fetch("http://localhost:8000/files");
    const data = await response.json();
    return data;
  }

  const files: File[] = await fetchFiles();
  return (
    <div className="h-screen py-6 px-4 flex flex-col gap-4 max-w-2xl mx-auto">
      <h1 className="font-bold text-4xl text-center">Dashboard</h1>

      <div className="border border-dashed border-gray-200 p-4">
        <h2 className="font-bold text-2xl text-center">Upload File</h2>
        <form className="space-y-2" action={createFile}>
          
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                className="border rounded border-emerald-400 p-2"
                type="text"
                name="name"
                placeholder="image.jpeg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="size">Size</label>
              <input
                className="border rounded border-emerald-400 p-2"
                type="text"
                name="size"
                placeholder="100 KB"
              />
          </div>
          <button type="submit" className="bg-emerald-600 p-2 rounded w-full">
            Upload
          </button>
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {files.map((file) => (
          <FileItem key={file.id} file={file} />
        ))}
      </div>
    </div>
  );
}
