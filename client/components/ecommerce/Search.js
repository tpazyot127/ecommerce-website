import { useRouter } from "next/router";
import React, { useState } from "react";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const router = useRouter();

    const handleSearch = () => {
        console.log("click");
        router.push({
            pathname: "/products",
            query: {
                search: searchTerm,
            },
        });
        setSearchTerm("");
    };

    const handleInput = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSearch();
        }
    };
    return (
        <>
            <form>
                <select className="select-active">
                    <option>Tất cả SP</option>
                    <option>Đồ ăn liền</option>
                    <option>Đồ khô</option>
                    <option>Dược liệu</option>
                </select>
                <input
                    value={searchTerm}
                    onKeyDown={handleInput}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    type="text"
                    placeholder="Tìm kiếm sản phẩm"
                />
            </form>
        </>
    );
};

export default Search;
