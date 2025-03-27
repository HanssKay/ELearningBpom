import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
    const [step, setStep] = useState(1);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    // Function untuk menangani submit tiap step
    const onSubmit = (data) => {
        setFormData({ ...formData, ...data });
        if (step < 3) {
            setStep(step + 1);
        } else {
            console.log("Final Data:", { ...formData, ...data });
            alert("Registrasi berhasil!");
            navigate ("/")
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-linear-to-b from-[var(--color-one)] to-[var(--color-two)] p-6">
            <div className="bg-white p-4.5 rounded-lg shadow-xl  mt-17 border-1 border-black w-full max-w-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    {/* Step 1 - Nama & Email */}
                    {step === 1 && (
                        <>
                            <div>
                                <label className="block text-sm font-medium mb-0.5">Nama Lengkap</label>
                                <input
                                    type="text"
                                    {...register("nama", { required: "Nama harus diisi" })}
                                     placeholder={errors?.nama ? errors?.nama.message : "Masukkan nama"}
                                    className={` p-2 w-full rounded ${errors?.nama ? "font-semibold border-2 border-red-500 text-red-500" : "border-1 border-black"}`}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium  mb-0.5">Email</label>
                                <input
                                    type="email"
                                    {...register("email", {
                                        required: "Email harus diisi",
                                        pattern: { value: /\S+@\S+\.\S+/, message: "Masukkan email yang valid" }
                                    })}
                                    placeholder={errors.email ? errors.email.message : "Masukkan email"}
                                    className={`border-1 border-black p-2 w-full rounded ${errors.email ? " font-semibold border-2 border-red-500 text-red-500" : "border-1 border-black"}`}
                                />
                                
                            </div>

                            <button type="submit" className="bg-blue-500 cursor-pointer hover:bg-blue-800 text-white p-2 rounded w-full">
                                Next
                            </button>
                        </>
                    )}

                    {/* Step 2 - Nomor Telepon, Alamat, etc */}
                    {step === 2 && (
                        <>
                            <div>
                                <label className="block text-xs font-medium mb-0.5">Nomor Telepon</label>
                                <input
                                    type="text"
                                    {...register("nomorTelepon", { required: "Nomor telepon harus diisi" })}
                                    placeholder={errors?.nomorTelepon ? errors.nomorTelepon.message : "Masukkan nomor telepon"}
                                    className={`border p-1 w-full rounded ${errors?.nomorTelepon ? "border-2 text-red-500 font-semibold border-red-500" : "border-black"}`}
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium mb-0.5">Alamat</label>
                                <input
                                    type="text"
                                    {...register("alamat", { required: "Alamat harus diisi" })}
                                    placeholder={errors?.alamat ? errors.alamat.message : "Masukkan alamat"}
                                    className={`border p-1 w-full rounded ${errors?.alamat ? "border-2 text-red-500 font-semibold border-red-500" : "border-black"}`}
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium mb-0.5">Tanggal Lahir</label>
                                <input
                                    type="date"
                                    {...register("tanggalLahir", { required: "Tanggal lahir harus diisi" })}
                                    className={`border p-1 w-full rounded ${errors?.tanggalLahir ? "border-2 text-red-500 font-semibold border-red-500" : "border-black"}`}
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium mb-0.5">Pekerjaan</label>
                                <input
                                    type="text"
                                    {...register("pekerjaan", { required: "Pekerjaan harus diisi" })}
                                    placeholder={errors?.pekerjaan ? errors.pekerjaan.message : "Masukkan pekerjaan"}
                                    className={`border p-1 w-full rounded ${errors?.pekerjaan ? "border-2 text-red-500 font-semibold border-red-500" : "border-black"}`}
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium mb-0.5">NIM/NIK</label>
                                <input
                                    type="text"
                                    {...register("nimNik", { required: "NIM/NIK harus diisi" })}
                                    placeholder={errors?.nimNik ? errors.nimNik.message : "Masukkan NIM/NIK"}
                                    className={`border p-1 w-full rounded ${errors?.nimNik ? "border-2 text-red-500 font-semibold border-red-500" : "border-black"}`}
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium mb-0.5">Lampiran (PDF)</label>
                                <input
                                    type="file"
                                    accept=".pdf"
                                    {...register("lampiran", { required: "Harap upload lampiran" })}
                                    className={`border p-1 w-full rounded ${errors?.lampiran ? "border-2 text-red-500 font-semibold border-red-500" : "border-black"}`}
                                />
                            </div>

                            <div className="flex mt-3 justify-between">
                                <button
                                    type="button"
                                    onClick={() => setStep(step - 1)}
                                    className="bg-gray-400 hover:bg-gray-600 text-white cursor-pointer p-2 rounded"
                                >
                                    Back
                                </button>
                                <button type="submit" className="bg-blue-400 cursor-pointer hover:bg-blue-700 text-white p-2 rounded">
                                    Next
                                </button>
                            </div>
                        </>
                    )}

                    {/* Step 3 - Pilih Course */}
                    {step === 3 && (
                        <>
                            <div>
                                <label className="block text-sm font-medium mb-0.5">Pilih Course</label>
                                <select
                                    {...register("course", { required: "Harap pilih course" })}
                                    className={`border p-2 w-full rounded ${errors?.course ? "border-2 border-red-500 text-red-500" : "border-black"}`}
                                >
                                    <option value="" className="text-gray-400">
                                        {errors?.course ? errors.course.message : "Pilih Course"}
                                    </option>
                                   <option value="Web Development">Web Development</option>
                                    <option value="Data Science">Data Science</option>
                                    <option value="Cyber Security">Cyber Security</option>
                                </select>
                            </div>


                            <div className="flex justify-between">
                                <button
                                    type="button"
                                    onClick={() => setStep(step - 1)}
                                    className="bg-gray-400 hover:bg-gray-700 cursor-pointer text-white p-2 rounded"
                                >
                                    Back
                                </button>
                                <button type="submit" className="bg-green-500 cursor-pointer hover:bg-green-700 text-white p-2 rounded">
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
