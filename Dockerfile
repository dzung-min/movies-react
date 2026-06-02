# Node.jsの軽量バージョン（Alpine）を指定
FROM node:20-alpine

# 作業ディレクトリを設定
WORKDIR /app

# package.json と package-lock.json (または yarn.lock) をコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# Viteのデフォルトポート（5173）を公開
EXPOSE 5173

# ホストからコンテナ内のファイル変更を検知するための設定と開発サーバー起動
CMD ["npm", "run", "dev", "--", "--host"]
