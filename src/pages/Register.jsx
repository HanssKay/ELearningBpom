import { useState } from "react";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
    const [step, setStep] = useState(1);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [formData, setFormData] = useState({});

    // Function untuk menangani submit tiap step
    const onSubmit = (data) => {
        setFormData({ ...formData, ...data });
        if (step < 3) {
            setStep(step + 1);
        } else {
            console.log("Final Data:", { ...formData, ...data });
            alert("Registrasi berhasil!");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-green-200 p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    {/* Step 1 - Nama & Email */}
                    {step === 1 && (
                        <>
                            <div>
                                <label className="block text-sm font-medium">Nama Lengkap</label>
                                <input
                                    type="text"
                                    {...register("nama", { required: "Nama harus diisi" })}
                                    className="border p-2 w-full rounded"
                                />
                                {errors.nama && <p className="text-red-500 text-sm">{errors.nama.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium">Email</label>
                                <input
                                    type="email"
                                    {...register("email", {
                                        required: "Email harus diisi",
                                        pattern: { value: /\S+@\S+\.\S+/, message: "Masukkan email yang valid" }
                                    })}
                                    className="border p-2 w-full rounded"
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                            </div>

                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded w-full">
                                Next
                            </button>
                        </>
                    )}

                    {/* Step 2 - Nomor Telepon, Alamat, etc */}
                    {step === 2 && (
                        <>
                            <div>
                                <label className="block text-sm font-medium">Nomor Telepon</label>
                                <input
                                    type="text"
                                    {...register("nomorTelepon", { required: "Nomor telepon harus diisi" })}
                                    className="border p-2 w-full rounded"
                                />
                                {errors.nomorTelepon && <p className="text-red-500 text-sm">{errors.nomorTelepon.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium">Alamat</label>
                                <input
                                    type="text"
                                    {...register("alamat", { required: "Alamat harus diisi" })}
                                    className="border p-2 w-full rounded"
                                />
                                {errors.alamat && <p className="text-red-500 text-sm">{errors.alamat.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium">Tanggal Lahir</label>
                                <input
                                    type="date"
                                    {...register("tanggalLahir", { required: "Tanggal lahir harus diisi" })}
                                    className="border p-2 w-full rounded"
                                />
                                {errors.tanggalLahir && <p className="text-red-500 text-sm">{errors.tanggalLahir.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium">Pekerjaan</label>
                                <input
                                    type="text"
                                    {...register("pekerjaan", { required: "Pekerjaan harus diisi" })}
                                    className="border p-2 w-full rounded"
                                />
                                {errors.pekerjaan && <p className="text-red-500 text-sm">{errors.pekerjaan.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium">NIM/NIK</label>
                                <input
                                    type="text"
                                    {...register("nimNik", { required: "NIM/NIK harus diisi" })}
                                    className="border p-2 w-full rounded"
                                />
                                {errors.nimNik && <p className="text-red-500 text-sm">{errors.nimNik.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium">Lampiran (PDF)</label>
                                <input
                                    type="file"
                                    accept=".pdf"
                                    {...register("lampiran", { required: "Harap upload lampiran" })}
                                    className="border p-2 w-full rounded"
                                />
                                {errors.lampiran && <p className="text-red-500 text-sm">{errors.lampiran.message}</p>}
                            </div>

                            <div className="flex justify-between">
                                <button
                                    type="button"
                                    onClick={() => setStep(step - 1)}
                                    className="bg-gray-400 text-white p-2 rounded"
                                >
                                    Back
                                </button>
                                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">
                                    Next
                                </button>
                            </div>
                        </>
                    )}

                    {/* Step 3 - Pilih Course */}
                    {step === 3 && (
                        <>
                            <div>
                                <label className="block text-sm font-medium">Pilih Course</label>
                                <select
                                    {...register("course", { required: "Harap pilih course" })}
                                    className="border p-2 w-full rounded"
                                >
                                    <option value="">Pilih Course</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="Data Science">Data Science</option>
                                    <option value="Cyber Security">Cyber Security</option>
                                </select>
                                {errors.course && <p className="text-red-500 text-sm">{errors.course.message}</p>}
                            </div>

                            <div className="flex justify-between">
                                <button
                                    type="button"
                                    onClick={() => setStep(step - 1)}
                                    className="bg-gray-400 text-white p-2 rounded"
                                >
                                    Back
                                </button>
                                <button type="submit" className="bg-green-500 hover:bg-green-700 text-white p-2 rounded">
                                    Submit
                                </button>
                            </div>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
