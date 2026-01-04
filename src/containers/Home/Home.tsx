


const Home = () => {
    return (
        <section>
            <div className="text-center mb-5">
                <h1 className="fw-bold">Мир кино</h1>
                <p className="text-muted mt-3">
                    Кино — это искусство, которое объединяет истории, эмоции и технологии.
                    Здесь вы найдёте информацию о жанрах, культовых фильмах и мире кинематографа.
                </p>
            </div>

            <div className="row g-4">
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Жанры</h5>
                            <p className="card-text">
                                Драма, фантастика, триллер, комедия и хоррор —
                                каждый жанр предлагает уникальный взгляд на историю.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Культовые фильмы</h5>
                            <p className="card-text">
                                Картины, которые повлияли на индустрию и стали частью
                                мировой культуры и истории кино.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Современное кино</h5>
                            <p className="card-text">
                                Новые технологии, визуальные эффекты и стриминговые сервисы
                                формируют будущее кинематографа.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
