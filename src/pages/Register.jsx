import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterForm = () => {
    const [step, setStep] = useState(1);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    // Fungsi submit tiap step
    const onSubmit = async (data) => {
        const finalData = { ...formData, ...data };

        if (step < 3) {
            setFormData(finalData);
            setStep(step + 1);
        } else {
            // Step terakhir: kirim data ke backend
            const formDataToSend = new FormData();
            // Sesuaikan field sesuai backend
            formDataToSend.append("full_name", finalData.nama);
            formDataToSend.append("email", finalData.email);
            formDataToSend.append("phone_number", finalData.nomorTelepon);
            formDataToSend.append("address", finalData.alamat);
            formDataToSend.append("birth_date", finalData.tanggalLahir);
            formDataToSend.append("occupation", finalData.pekerjaan);
            formDataToSend.append("identity_number", finalData.nimNik);
            formDataToSend.append("selected_course", finalData.course);
            // Perhatikan: finalData.lampiran adalah FileList, gunakan file pertama
            formDataToSend.append("document", finalData.lampiran[0]);

            try {
                const response = await axios.post("http://localhost:5000/api/register", formDataToSend, {
                    headers: { "Content-Type": "multipart/form-data" }
                });
                alert("Pendaftaran berhasil!");
                console.log("Response:", response.data);
                navigate("/");
            } catch (error) {
                console.error("Pendaftaran gagal:", error.response ? error.response.data : error);
                alert("Pendaftaran gagal, coba lagi.");
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-200 to-blue-500 p-6">
            <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
                            <button type="submit" className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white p-2 rounded">
                                Next
                            </button>
                        </>
                    )}
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
                            <div className="flex justify-between">
                                <button
                                    type="button"
                                    onClick={() => setStep(step - 1)}
                                    className="bg-gray-500 hover:bg-gray-700 cursor-pointer text-white p-2 rounded"
                                >
                                    Back
                                </button>
                                <button type="submit" className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white p-2 rounded">
                                    Next
                                </button>
                            </div>
                        </>
                    )}
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
                                    className="bg-gray-500 hover:bg-gray-700 cursor-pointer text-white p-2 rounded"
                                >
                                    Back
                                </button>
                                <button type="submit" className="bg-green-500  cursor-pointer hover:bg-green-700 text-white p-2 rounded">
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
