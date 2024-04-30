-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Kid" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "groupId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "Kid_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Kid" ("createdAt", "groupId", "id", "name", "updatedAt") SELECT "createdAt", "groupId", "id", "name", "updatedAt" FROM "Kid";
DROP TABLE "Kid";
ALTER TABLE "new_Kid" RENAME TO "Kid";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
