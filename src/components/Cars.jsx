import { useState, useEffect } from "react";
import {
    Heart,
    Info,
    MessageCircle,
    X as Close,
    Headset,
    HeartPlus,
} from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { ShoppingCart } from "lucide-react";

const formatIDR = (n) =>
    new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
    }).format(n);

export default function Cars({
    products,
    onToggleLike,
    onToggleCart,
    onQtyInc,
    onQtyDec,
}) {
    const [infoOpen, setInfoOpen] = useState(null);
    const [commentOpen, setCommentOpen] = useState(null);
    const [comments, setComments] = useState({});
    const [csOpen, setCsOpen] = useState(false);
    const [csMessages, setCsMessages] = useState([]);
    const [dataCars, setDatacars] = useState(products);
    const [sortOption, setSortOption] = useState('');
    // dataCars.filter((car) => car.name)

    // materi baru

    const fetchdata =() =>{
        setDatacars(products);
    }

    useEffect(() => {
        fetchdata();
    }, [products]);

    useEffect(() => {
        setDatacars(prev => sortData(sortOption, prev));
    }, [sortOption]);

    const handleChange = (keyword) => {
        let filteredData = products;

        if (keyword.trim()) {
            filteredData = products.filter(car =>
                car.name.toLowerCase().includes(keyword.toLowerCase()) ||
                car.color.toLowerCase().includes(keyword.toLowerCase()) ||
                car.price.toString().includes(keyword)
            );
        }

        const sortedData = sortData(sortOption, filteredData);
        setDatacars(sortedData);
    };

    const sortData = (option, data) => {
        const sorted = [...data];
        if (option === 'name-asc') {
            sorted.sort((a, b) => a.name.localeCompare(b.name));
        } else if (option === 'name-desc') {
            sorted.sort((a, b) => b.name.localeCompare(a.name));
        } else if (option === 'price-asc') {
            sorted.sort((a, b) => a.price - b.price);
        } else if (option === 'price-desc') {
            sorted.sort((a, b) => b.price - a.price);
        } else if (option === ''){
            fetchdata();
        }
        return sorted;
    };

    // -------------------------------------------------------------------------
    const addComment = (id, text) => {
        if (!text.trim()) return;
        setComments((prev) => ({
            ...prev,
            [id]: [...(prev[id] || []), text.trim()],
        }));
    };

    const addCsMessage = (text) => {
        if (!text.trim()) return;
        setCsMessages((prev) => [...prev, text.trim()]);
    };

    const modalOpen = infoOpen || commentOpen;

    return (
        <section className="px-4 py-8 max-w-screen-xl mx-auto">
            <h1 className="text-center text-4xl font-bold text-gray-800 my-8">
                Latest BMW Models
            </h1>

            <div className="max-w-md mx-auto mb-6">
                <input
                    type="text"
                    placeholder="Search by name, color, or price..."
                    className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => handleChange(e.target.value)}
                />
            </div>
            <div className="flex justify-end mb-6">
                <select
                    onChange={(e) => {
                        const option = e.target.value;
                        setSortOption(option);
                        const sorted = sortData(option, dataCars);
                        setDatacars(sorted);
                    }}
                    className="py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Sort By</option>
                    <option value="name-asc">Name A-Z</option>
                    <option value="name-desc">Name Z-A</option>
                    <option value="price-asc">Price Low to High</option>
                    <option value="price-desc">Price High to Low</option>
                </select>
            </div>

            <MsService onClick={() => setCsOpen(true)} />


            <div
                className={`grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ${modalOpen ? "pointer-events-none opacity-30" : ""
                    }`}
            >
                {dataCars.map((p) => (
                    <Card
                        key={p.id}
                        product={p}
                        latestComment={comments[p.id]?.slice(-1)[0]}
                        onToggleLike={() => onToggleLike(p.id)}
                        onToggleCart={() => onToggleCart(p.id)}
                        onQtyInc={() => onQtyInc(p.id)}
                        onQtyDec={() => onQtyDec(p.id)}
                        openInfo={() => setInfoOpen(p)}
                        openComment={() => setCommentOpen(p)}
                    />
                ))}
            </div>

            {infoOpen && (
                <Overlay onClose={() => setInfoOpen(null)}>
                    <CloseButton onClose={() => setInfoOpen(null)} />
                    <div className="bg-white/90 rounded-xl p-6 shadow-xl max-h-[90vh] overflow-y-auto space-y-4">
                        <img
                            src={infoOpen.image}
                            alt={infoOpen.name}
                            className="w-full max-h-[400px] object-contain rounded-xl shadow-md bg-white"
                        />
                        <h3 className="text-2xl font-bold text-[#0066cc] text-center">
                            {infoOpen.name}
                        </h3>
                        <p className="text-center text-lg font-semibold text-gray-800">
                            {formatIDR(infoOpen.price)}
                        </p>
                        <div className="flex justify-center items-center gap-2">
                            <span className="text-sm text-gray-600">Color:</span>
                            <span
                                className="w-5 h-5 rounded-full border border-gray-300"
                                style={{ backgroundColor: infoOpen.color.toLowerCase() }}
                                title={infoOpen.color}
                            ></span>
                            <span className="text-sm font-medium text-gray-800">
                                {infoOpen.color}
                            </span>
                        </div>
                        <div className="text-sm text-gray-700 space-y-2 leading-relaxed">
                            <div>
                                <strong>Description:</strong>
                                <p>{infoOpen.desc}</p>
                            </div>
                            <div>
                                <strong>Technical Specs:</strong>
                                <p>{infoOpen.detail}</p>
                            </div>
                        </div>
                    </div>
                </Overlay>
            )}

            {commentOpen && (
                <Overlay onClose={() => setCommentOpen(null)}>
                    <CloseButton onClose={() => setCommentOpen(null)} />
                    <div className="bg-white/90 rounded-xl p-6 shadow-xl max-h-[80vh] overflow-y-auto">
                        <h3 className="mb-4 text-center text-xl font-bold">
                            Comments for {commentOpen.name}
                        </h3>
                        <CommentInput onSubmit={(t) => addComment(commentOpen.id, t)} />
                        <ul className="mt-4 space-y-2 text-sm">
                            {(comments[commentOpen.id] || []).map((c, i) => (
                                <li key={i} className="rounded-lg bg-gray-100 p-2 shadow">
                                    {c}
                                </li>
                            ))}
                            {!(comments[commentOpen.id] || []).length && (
                                <li className="text-center text-gray-500 italic">
                                    No comments yet.
                                </li>
                            )}
                        </ul>
                    </div>
                </Overlay>
            )}

            {csOpen && (
                <div className="fixed bottom-6 right-6 z-50 w-80 max-w-[90vw]">
                    <div className="relative rounded-2xl bg-white shadow-lg p-4">
                        <button
                            onClick={() => setCsOpen(false)}
                            className="absolute top-2 right-2 text-gray-600 hover:text-black"
                        >
                            <Close className="h-5 w-5" />
                        </button>
                        <h4 className="text-lg font-semibold mb-2">Contact Customer Service</h4>
                        <div className="max-h-40 overflow-y-auto mb-2 space-y-1 text-sm">
                            {csMessages.map((m, i) => (
                                <div key={i} className="bg-gray-100 p-2 rounded-lg">
                                    {m}
                                </div>
                            ))}
                            {!csMessages.length && (
                                <p className="text-gray-400 italic">No messages yet.</p>
                            )}
                        </div>
                        <CommentInput onSubmit={addCsMessage} />
                    </div>
                </div>
            )}
        </section>
    );
}

function Card({
    product: p,
    latestComment,
    onToggleLike,
    onToggleCart,
    onQtyInc,
    onQtyDec,
    openInfo,
    openComment,
}) {
    return (
        <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white/60 shadow-sm backdrop-blur transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="relative h-56 overflow-hidden">
                <img
                    src={p.image}
                    alt={p.name}
                    className="h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
                <button
                    onClick={onToggleLike}
                    aria-label="like"
                    className={`absolute right-3 top-3 rounded-full p-2 text-white shadow-md transition-colors ${p.liked ? "bg-[#f3c5c5]" : "bg-black/40 hover:bg-black/60"
                        }`}
                >
                    {p.liked ? (
                        <Heart className="h-5 w-5 text-red-600" fill="currentColor" />
                    ) : (
                        <HeartPlus className="h-5 w-5" />
                    )}
                </button>
            </div>

            <div className="space-y-2 p-4">
                <h3 className="line-clamp-2 text-lg font-semibold tracking-tight text-gray-900">
                    {p.name}
                </h3>
                <div className="flex items-center justify-between">
                    <p className="text-l font-bold text-[#0066cc]">{formatIDR(p.price)}</p>
                    <div className="flex items-center gap-2">
                        <div
                            className={`w-4 h-4 rounded-full border ${p.color.toLowerCase() === "white" ? "border-black" : "border-white"}`}
                            style={{ backgroundColor: p.color.toLowerCase() }}
                        ></div>
                        <span className="text-sm text-gray-600 capitalize">{p.color}</span>
                    </div>
                </div>
                {latestComment && (
                    <p className="rounded-md bg-gray-100 p-2 text-xs italic text-gray-700">
                        <i>Latest comment:</i> "{latestComment}"
                    </p>
                )}
                <div className="mt-3 flex items-center justify-between">
                    <button
                        onClick={openInfo}
                        aria-label="info"
                        className="rounded-full bg-black/60 p-2 text-white hover:bg-[#0066cc]"
                    >
                        <Info className="h-5 w-5" />
                    </button>
                    <button
                        onClick={openComment}
                        aria-label="comment"
                        className="rounded-full bg-black/60 p-2 text-white hover:bg-[#0066cc]"
                    >
                        <MessageCircle className="h-5 w-5" />
                    </button>
                    {p.inCart ? (
                        <div className="flex items-center gap-2">
                            <button
                                onClick={onQtyDec}
                                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#d40000] text-white hover:bg-red-600"
                            >
                                -
                            </button>
                            <span className="w-6 text-center text-sm font-semibold">{p.quantity}</span>
                            <button
                                onClick={onQtyInc}
                                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700"
                            >
                                +
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={onToggleCart}
                            className="ml-auto flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0066cc] to-sky-600 px-5 py-2 text-sm font-semibold tracking-wide text-white shadow hover:brightness-110 transition"
                        >
                            <ShoppingCart className="h-4 w-4" />
                            Add to Cart
                        </button>

                    )}
                </div>
            </div>
        </div>
    );
}

function MsService({ onClick }) {
    return (
        <div className="fixed bottom-6 right-6 z-50">
            <div
                className="group relative inline-block cursor-pointer transition-transform duration-300 hover:rotate-12 hover:scale-110"
                onClick={onClick}
            >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0066cc] shadow-xl backdrop-blur">
                    <Headset className="h-7 w-7 text-white" />
                </div>
            </div>
        </div>
    );
}

function Overlay({ children, onClose }) {
    return (
        <div
            onClick={onClose}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
        >
            <div onClick={(e) => e.stopPropagation()} className="relative w-[90%] max-w-lg z-[101]">
                {children}
            </div>
        </div>
    );
}

function CloseButton({ onClose }) {
    return (
        <button
            onClick={onClose}
            aria-label="close"
            className="absolute right-4 top-4 z-50 rounded-full bg-white/80 p-2 text-black hover:bg-white"
        >
            <Close className="h-5 w-5" />
        </button>
    );
}

function CommentInput({ onSubmit }) {
    const [text, setText] = useState("");
    return (
        <div className="flex gap-2">
            <input
                className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-[#0066cc] focus:ring-2 focus:ring-[#0066cc]/40"
                placeholder="Write a comment..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && text.trim()) {
                        onSubmit(text);
                        setText("");
                    }
                }}
            />
            <button
                onClick={() => {
                    if (text.trim()) {
                        onSubmit(text);
                        setText("");
                    }
                }}
                className="rounded-lg bg-[#0066cc] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700"
            >
                Send
            </button>
        </div>
    );
}
